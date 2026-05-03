import { useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useProductStore } from "../../store/product.store";
import ProductTable from "../../components/ui/ProductTable";
import ProductForm from "../../components/products/ProductForm";
import ProductToolbar from "../../components/products/ProductToolbar";
import BulkActions from "../../components/products/BulkActions";
import ImportCSV from "../../components/products/ImportCSV";
import ImportJSON from "../../components/products/ImportJSON";
import { deleteProduct } from "../../services/modules/product.service";
import "../../styles/main.scss";


export default function ProductsPage() {
  const { filtered, fetchProducts } = useProductStore();
  const store = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);


  useEffect(() => {
    console.log("Store completo:", store);
  }, [store]);

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <DashboardLayout>
      <div className="products-page">
        <h1>Gestión de Productos</h1>

        <ProductToolbar />
        <BulkActions refresh={fetchProducts} />

        <div className="products-grid">
          <div className="products-panel">
            <ProductTable products={filtered} onDelete={handleDelete} />
          </div>
{/* formularios de envíos aquí */}
          <div> 
            <ProductForm onCreated={fetchProducts} />
            <ImportCSV refresh={fetchProducts} />
            <ImportJSON refresh={fetchProducts} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
import { useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useProductStore } from "../../store/product.store";
import ProductTable from "../../components/ui/ProductTable";
import ProductForm from "../../components/products/ProductForm";
import ProductToolbar from "../../components/products/ProductToolbar";
import BulkActions from "../../components/products/BulkActions";
import ImportCSV from "../../components/products/ImportCSV";
import { deleteProduct } from "../../services/modules/product.service";

export default function ProductsPage() {
  const { filtered, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <DashboardLayout>
      <h1>Productos</h1>

      <ProductToolbar />
      <BulkActions refresh={fetchProducts} />

      <ProductForm onCreated={fetchProducts} />
      <ImportCSV refresh={fetchProducts} />

      <ProductTable products={filtered} onDelete={handleDelete} />
    </DashboardLayout>
  );
}
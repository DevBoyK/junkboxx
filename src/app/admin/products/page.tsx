"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  imageUrl: string;
}

export default function ProductsPage() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className="rounded-lg bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-4 text-center text-muted-foreground"
                  >
                    No products found. Add your first product!
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="px-6 py-4">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="h-12 w-12 rounded-md object-cover"
                      />
                    </td>
                    <td className="px-6 py-4">{product.title}</td>
                    <td className="px-6 py-4">${product.price}</td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="rounded-md p-2 hover:bg-accent">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button className="rounded-md p-2 hover:bg-accent">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-card p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Add New Product</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Product title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Price</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Category</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Category"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Image URL</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="https://..."
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="rounded-md border border-input px-4 py-2 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { saveRecipe } from "../reducers/AddRecipeSlice";
import { easeIn } from "framer-motion";
import { motion } from "framer-motion";
import { AppDispatch } from "../store/Store";
import { MyRecipe } from "../models/MyRecipe";
import { toast } from "react-toastify";

export function AddRecipeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const initialRecipeState = {
    title: "",
    category: "",
    description: "",
    imageUrl: "",
  };

  const [recipe, setRecipe] = useState(initialRecipeState);

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecipe: MyRecipe = {
      ...recipe,
    };
    try {
      await dispatch(saveRecipe(newRecipe)).unwrap();
      toast.success("Recipe added successfully! 🥳");
      setRecipe(initialRecipeState);
      onClose();
    } catch (error) {
      toast.error("Failed to add recipe 😢");
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1, ease: easeIn }}
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Add Your Own Recipe
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Recipe Name"
            value={recipe.title}
            onChange={handleChange}
            className="border p-2 rounded focus:border-green-500"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={recipe.category}
            onChange={handleChange}
            className="border p-2 rounded focus:border-green-500"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={recipe.description}
            onChange={handleChange}
            className="border p-2 rounded focus:border-green-500"
            required
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={recipe.imageUrl}
            onChange={handleChange}
            className="border p-2 rounded focus:border-green-500"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </motion.div>
  );
}

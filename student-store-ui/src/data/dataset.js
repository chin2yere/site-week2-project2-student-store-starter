import data from "./student-store-data.json"

export const Dataset = {
  getUniqueName: (d) => [...new Set(d.map((row) => row.name))],
  getUniqueCategory: (d) => [...new Set(d.map((row) => row.category))],
  getUniquePrice: (d) => [...new Set(d.map((row) => row.price))],
  getUniqueImage: (d) => [...new Set(d.map((row) => row.image))],
  createDataSet: () => {
    return {
      data,
      name: Dataset.getUniqueName(data),
      category: Dataset.getUniqueCategory(data),
      price: Dataset.getUniquePrice(data),
      image: Dataset.getUniqueImage(data),
    }
  },
}
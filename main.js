// --- Câu 1: Khai báo constructor function Product ---
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// --- Câu 2: Khởi tạo mảng products (6 sản phẩm, 2 danh mục) ---
const products = [
    new Product(1, "iPhone 15 Pro", 28000000, 10, "Smartphones", true),
    new Product(2, "MacBook M3", 35000000, 5, "Laptops", true),
    new Product(3, "AirPods Pro 2", 5500000, 0, "Accessories", true),
    new Product(4, "Samsung S24 Ultra", 31000000, 8, "Smartphones", true),
    new Product(5, "Magic Mouse", 2000000, 15, "Accessories", false),
    new Product(6, "Logitech MX Master 3S", 3000000, 12, "Accessories", true)
];

console.log("--- Toàn bộ sản phẩm ---", products);

// --- Câu 3: Tạo mảng mới chỉ chứa name và price ---
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3 - Tên và Giá:", nameAndPrice);

// --- Câu 4: Lọc ra các sản phẩm còn hàng (quantity > 0) ---
const availableInStock = products.filter(p => p.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng:", availableInStock);

// --- Câu 5: Kiểm tra có ít nhất một sản phẩm giá trên 30.000.000 không ---
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5 - Có sản phẩm > 30tr không?", hasExpensiveProduct);

// --- Câu 6: Kiểm tra tất cả sản phẩm "Accessories" có đang bán không ---
const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
console.log("Câu 6 - Tất cả phụ kiện đều đang bán?", allAccessoriesAvailable);

// --- Câu 7: Tính tổng giá node -vtrị kho hàng ---
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("Câu 7 - Tổng giá trị kho hàng:", totalInventoryValue.toLocaleString(), "VNĐ");

// --- Câu 8: Dùng for...of in ra: Tên - Danh mục - Trạng thái ---
console.log("Câu 8 - Danh sách tóm tắt:");
for (const p of products) {
    const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
}

// --- Câu 9: Dùng for...in để in thuộc tính và giá trị (thử trên sản phẩm đầu tiên) ---
console.log("Câu 9 - Chi tiết sản phẩm đầu tiên:");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// --- Câu 10: Lấy danh sách tên sản phẩm đang bán VÀ còn hàng ---
const sellingAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("Câu 10 - Tên các sản phẩm đang bán và còn hàng:", sellingAndInStockNames);

// Next.js webpack chunk
console.log("Next.js webpack chunk loaded");

// Simular funcionalidad de Next.js
self.__next_f = self.__next_f || [];
self.__next_f.push = function(data) {
    console.log("Next.js data pushed:", data[0]);
    return Array.prototype.push.apply(this, arguments);
};
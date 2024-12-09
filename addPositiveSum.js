// diberikan angka dalam array kembalikan penjumlahan nilai/angka positif nya

function positiveSum(arr) {
  let sum = 0; // variabel untuk menampung hasil penjumlahan

  for (let i = 0; i < arr.length; i++) {
    // looping untuk memeriksa nilai positif dan negatif dalam array
    if (arr[i] > 0) {
      sum += arr[i]; // jika positif masukkan ke variabel jumlah
    }
  }
  return sum; // mengembalikan hasil penjumlahan
}

console.log(positiveSum([-1, -2, -3, -4, 0, 9]));

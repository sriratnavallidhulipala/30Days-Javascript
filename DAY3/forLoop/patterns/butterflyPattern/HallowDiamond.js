let i,
  j,
  n = 6;
let store = "";
for (i = 0; i <= n; i++) {
  for (j = 0; j <= 2 * n + 1; j++) {
    
    if ((n - i < j )&& (j < n + 1 + i)) {
      store = store + " ";
    } else {
      store = store + "* ";
    }
  }
  store = store + "\n";
}
console.log(store)

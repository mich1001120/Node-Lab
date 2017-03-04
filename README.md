參考自[這裡](https://nodejust.com/nodejs-hello-world-tutorial/)

##問題

1.`forever`和`nodemon`要怎麼使用?

2.`ctrl + break`結束程式，怎麼使用?

##Node.js 30days
1.`forever`可以保持運行的狀態，管理node.js程式的服務，最棒的是他會在你更新node.js時，自動幫你重啟服務!

2.`.createServer()`的返回值則是一個物件，這個物件有一個`listen()`的函數，決定伺服器要監聽哪一個port

3.`http://localhost:3000/blog?user=zack`，"/"之後，問號之前(也就是"blog")，稱之`pathname`；問號之後("user=zack")，稱之`query`。

4.為避免block的問題，最簡單的解決方法就是直接在函數裡處理輸出 : 就是把`Response`直接丟給home()跟blog()，使他們可以個別回應無須等待。
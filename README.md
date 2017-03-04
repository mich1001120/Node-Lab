# Node-Lab
This repository is used to practice the struction of Node.

參考自http://www.nodebeginner.org/index-zh-tw.html

##重點整理
1.`Node.js`某整意義來說 它可以脫離瀏覽器的環境，來運行JavaScript。

2.它擁有很多模組可以使用，所以它既是一個運行環境，也是一個函示庫。

3.網頁是透過不同的路徑(即URL)，伺服器接收到需求時(即Listen)，給予不同的回應。

4.函數傳遞，實際上的應用就是`回呼(CallBack)`，一個函數在參數裡帶入另一個匿名函數，達到`事件驅動`的效果。

5.別把`接收需求的處理程序`的工作放在`router`裡，盡可能地做到分工，避免日後更複雜時無法很好地擴充。

6.`blocking`與`non-blocking`如果不了解的話，請看這邊的連接有簡易的說明 http://ithelp.ithome.com.tw/articles/10161404。
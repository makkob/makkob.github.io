// >>>>>>>>>>>>>>> TASK 1

// (function(w,d,s,l){w[l]=w[l]||[];w[l].push('gtm.start':
// new Date().getTime(),event:'gtm.js');var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l?'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,d);
// })(window,document,'script','dataLayer','GTM-T333LJ');

// 1. Не було передано параметра і в функцію.
// 2. В функції "push" потрібно передати об'єкт { "gtm.start": new Date().getTime(), event: "gtm.js" } (забули поставити дужки фігурні).
// 3. Не вірно написаний тернарний оператор (замість ? теба поставити :)
// Ось так виглядає правильний код
// (function (w, d, s, l, i) {
//   w[l] = w[l] || [];
//   w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
//   var f = d.getElementsByTagName(s)[0],
//     j = d.createElement(s),
//     dl = l != "dataLayer" ? "&l=" + l : "";
//   j.async = true;
//   j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
//   f.parentNode.insertBefore(j, f);
// })(window, document, "script", "dataLayer", "GTM-MHJVP4Z");

//////////////////////////////////////////////////

// Сколько ошибок в коде? Дайте исправленный код и комментарии к каждой ошибке.
// Конструирование кода (mature level):
// Задание. Написать код для сайта https://www.firebirdtours.com/

// Если ID Google Analytics соответствует номеру “UA-49112570-1” и номер телефона Австралии на сайте соответствует “+61 2 6188 8118”
// то при клике на этот номер телефона изменить номер телефона австралии на “+06-1111-1111” а также в куку с именем “ScrollTracking” записать
// текущую глубину промотки скролла страницы в процентах.

// >>>>>>>>>>>>>>> TASK 2

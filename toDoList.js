// FIRST SELECT ITEMS WITH DOM
let newTaskDom = document.getElementById("task")
let newListDom = document.getElementById("list")
let existingListItems = newListDom.querySelectorAll('li');
let toastError = document.querySelector(`.toast.error`);
let toastOkay = document.querySelector(`.toast.success`)


existingListItems.forEach(li =>{//içinde bulunan her bir liste öğesi('li') üzerinde forEach Döngüsü başlatır.
    let span = document.createElement('span');//her bir liste öğesi için span elementi oluşturur.
    span.textContent = "\u00d7";//oluşturulan span elementinin metin içeriği ayarlandı(X)
    li.appendChild(span);//Oluşturulan span elementi her bir liste öğesine eklenir.

    

   span.addEventListener('click' ,function deleteElement(event){//span elementlerine tıklama olayı eklemek için event listener(olay dinleyicisi) ekler.Tıklama gerçekleştiğinde çalışır.
   event.target.parentElement.remove();//tıklama olayının hedefini(event target)kullanarak tıklanan span öğesinin üstündeki ebeveyn öğreyi(parent Element) bulur bu öğe sayesinde tıklanan öğeyi kaldırır.
   
   });
});


newListDom.addEventListener('click', function(i){//newListDOM öğesine  tıklama olayı ekler .tıklama olayı gerçekleştiğinde fonksiyon çalışır.
   if(i.target.tagName === "LI"){//tıklanan öğenin(event.target) etiket adının (tagName) liste öğesi olup olmadığını kontrol eder.liste öğesi ise blok çalışır.
       i.target.classList.toggle('textStyle')//tıklanan css öğesinin sınıf listesinde(classList) textstyle adlı sınıf listesini ekler veya kaldırır.
   }
})


function newElement(){

   if(newTaskDom.value === "" || newTaskDom.value.trim() === ""){//newTaskDOM elemanının değeri boş veya boşluklardan oluşuyorsa (trim) edildikten sonra durumu işler.
   
       $(toastError).toast(`show`); // durumu kullanıcıya hata mesajıyla bildir (toast)
   
   } else {//değilse
       
       let li = document.createElement('li')//yeni bir liste öğesi oluşturur(li)
       li.innerHTML = newTaskDom.value//liste öğesinin içeriğini form elemanının değeri olarak ayarlar.
       newListDom.appendChild(li)//oluşturulan liste öğesini belirli bir listeye ekler

       
       let span = document.createElement('span')//yeni bir span elementi oluşturur.
       span.innerHTML="\u00d7"//oluşturulan span elementinin içeriğini çarpı işareti olarak ayarlar.
       li.appendChild(span)//oluşturulan span elementini önce oluşturulan liste öğesine ekler.
       
       $(toastOkay).toast(`show`);//başarılı bir şekilde eklenirse bu durumu kullanıcıya bilgi mesajı olarak verir.
   }
   
   newTaskDom.value=""//form elemanının değerini temizler yeni görev eklemeye hazır hale gelir.

}

// IT WORKS SAME AS THE FIRST FUNCTION'S DELETE FUNCTION
newListDom.addEventListener('click', function deleteElement(event){// newListDOM adlı bir DOM öğesine click olay dinleyicisi ekler.
   if(event.target.tagName === 'SPAN'){//tıklanan öğenin etiketinin span olup olmadığını kontrol eder.
       event.target.parentElement.remove()//tıklanan span öğesinin üst öğesini buluur (parent element) onu DOM dan kaldırır.
   } 
})





    





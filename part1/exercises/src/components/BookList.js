export default function BookList() {
   let pageTitle = "My Three Favorite Book Series";
   let book1 = "https://target.scene7.com/is/image/Target/GUEST_6d0a4da5-9997-4727-b04c-9789d7321b1f?wid=1000&hei=1000&fit=constrain&qlt=80&fmt=webp";
   let book2 = "https://m.media-amazon.com/images/I/81jI3PJ8b1L.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51YZRhokbnL._SY498_BO1,204,203,200_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="A Courth of Thorns and Roses Series" />
         <img src={book2} alt="Throne of Glass Series" />
         <img src={book3} alt="Cresent City Series" />
      </div>      
   );
}
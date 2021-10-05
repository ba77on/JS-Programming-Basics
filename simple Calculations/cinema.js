function cinema (arg1, arg2, arg3) {
     let rowns = Number(arg2);
     let columns = Number(arg3);

     let premierePr = 12.00;
     let normalPr = 7.50; 
     let discount = 5.00;

     let allseats = (rowns * columns);

     switch(arg1) {
         case"Premiere": allseats *= premierePr; break;
         case"Normal": allseats *= normalPr; break;
         case"Discount": allseats *= discount; break; 
     }
     console.log(`${allseats.toFixed(2)} leva`)
}
cinema("Premiere", 10, 12)
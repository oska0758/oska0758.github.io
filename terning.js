function spil() {
  total = 0
 ok = true
 while(ok == true) {
 kast1 = Math.floor(6*Math.random()) + 1
 kast2 = Math.floor(6*Math.random()) + 1
 kast = kast1 + kast2
 if(kast == 1) {
 beloeb = 10
 total = total + beloeb
 }
 else if(kast == 2) {
 beloeb = 20
 total = total + beloeb
 }
 else if(kast == 3) {
 beloeb = 30
 total = total + beloeb
 }
 else if(kast == 4) {
 beloeb = 40
 total = total + beloeb
 }
 else if(kast == 5) {
 beloeb = 50
 total = total + beloeb
 }
 else if(kast == 6) {
 beloeb = 60
 total = total + beloeb
 }
 else if(kast == 7) {
 beloeb = 70
 total = total + beloeb
 }
 else if(kast == 8) {
 beloeb = 80
 total = total + beloeb
 }
 else if(kast == 9) {
 beloeb = 90
 total = total + beloeb
 }
 else if(kast == 10) {
 beloeb = 100
 total = total + beloeb
 }
 else if(kast == 11) {
 beloeb = 110
 total = total + beloeb
 }
 else {
 beloeb = 120
 total = total + beloeb
 }

 if(kast1 == 1) {
   terning.src = 'terning1.png'
 }
 else if(kast1 == 2) {
   terning.src = 'terning2.png'
 }
 else if(kast1 == 3) {
   terning.src = 'terning3.png'
 }
 else if(kast1 == 4) {
   terning.src = 'terning4.png'
 }
 else if(kast1 == 5) {
   terning.src = 'terning5.png'
 }
 else {
   terning.src = 'terning6v2.png'
 }

 if(kast2 == 1) {
   terning2.src = 'terning1.png'
 }
 else if(kast2 == 2) {
   terning2.src = 'terning2.png'
 }
 else if(kast2 == 3) {
   terning2.src = 'terning3.png'
 }
 else if(kast2 == 4) {
   terning2.src = 'terning4.png'
 }
 else if(kast2 == 5) {
   terning2.src = 'terning5.png'
 }
 else {
   terning2.src = 'terning6v2.png'
 }


 ok = confirm('Din gevinst er '+total3+' kr. Fortsæt?')
 }
}

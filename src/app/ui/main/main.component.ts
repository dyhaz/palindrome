import {AppComponent} from "../../app.component";
import {AfterViewInit, Component, OnDestroy, OnInit} from "@angular/core";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent extends AppComponent implements OnInit, AfterViewInit, OnDestroy {
  word = "";

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  checkPalindrome(txt) {
    let textNew = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = textNew.length;
    let halfLen = Math.floor( len/2 );
    let result = document.getElementById("result");
    let words = txt.split(" ");

    for(let i = 0; i < halfLen; i++) {
      if( textNew[i] !== textNew[len-1-i]) {
        result.textContent = "Not a palindrome!";
        return;
      }
      result.textContent = "Palindrome: “" + words[0] + "”";
    }

    let n = 0;

    words.forEach((w, index) => {
      for (let i = 0 ; i < words.length ; i++) {
        if (w === this.reverseString(w) || (i != index && w === this.reverseString(words[i]))) {
          n++;
          break;
        }
      }
    });

    result.textContent += " n: " + n
  }

  reverseString(str) {
    let splitString = str.split("");

    let reverseArray = splitString.reverse();

    return reverseArray.join("");
  }

  letterOnly(event)
  {
    let charCode = event.keyCode;

    return (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8 || charCode == 32;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuylinksService {

  constructor() { }
  devices = {
    laptop: "https://www.amazon.in/s?k=laptop&crid=MMMRA0UL8HG4&sprefix=laptop%2Caps%2C295&ref=nb_sb_ss_c_2_6_ts-doa-p",
    tv: "https://www.amazon.in/s?k=tv&i=electronics&crid=1E45I7GYI2SKP&sprefix=tv%2Celectronics%2C199&ref=nb_sb_ss_c_2_2_ts-doa-p",
    mobile: "https://www.amazon.in/s?k=mobile&i=electronics&crid=MYOQZSGB0PNI&sprefix=mobile%2Celectronics%2C190&ref=nb_sb_ss_ts-doa-p_1_6",
    washingmachine: "https://www.amazon.in/s?k=washinr+machine&crid=4ZBFMB5CAOHA&sprefix=washinr%2Caps%2C193&ref=nb_sb_ss_fb_1_7_ts-doa-p"
  };

  backgroundImages = {
    laptop: "../../assets/images/laptop.jpg",
    tv: "../../assets/images/tv.jpg",
    mobile: "../../assets/images/mobile.jpg",
    washingmachine: "../../assets/images/washing_machine.jpg"
  };
  
  // laptop = "https://www.amazon.in/s?k=laptop&crid=MMMRA0UL8HG4&sprefix=laptop%2Caps%2C295&ref=nb_sb_ss_c_2_6_ts-doa-p";
  // tv = "https://www.amazon.in/s?k=tv&i=electronics&crid=1E45I7GYI2SKP&sprefix=tv%2Celectronics%2C199&ref=nb_sb_ss_c_2_2_ts-doa-p";
  // mobile = "https://www.amazon.in/s?k=mobile&i=electronics&crid=MYOQZSGB0PNI&sprefix=mobile%2Celectronics%2C190&ref=nb_sb_ss_ts-doa-p_1_6";
  // washingmachine = "https://www.amazon.in/s?k=washinr+machine&crid=4ZBFMB5CAOHA&sprefix=washinr%2Caps%2C193&ref=nb_sb_ss_fb_1_7_ts-doa-p";
}

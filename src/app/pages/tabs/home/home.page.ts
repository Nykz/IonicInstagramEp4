import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChildren('instaVideo') videos: QueryList<any>;
  feeds: any[] = [
    {
      id: 1, 
      logo: 'assets/imgs/logo.png', 
      username: 'Coding Technyks', 
      location: 'India', 
      src: 'assets/videos/1.mp4',
      description: 'Hello Friends, Welcome to @CodingTechnyks, I brought to you Instagram Clone App UI - Part I using​ #Ionic5 #Angular for #android & #ios. Instagram Profile & Activity Screens. Watch at https://youtu.be/zQIBTFaDbNI',
      likes: 15
    },
    {
      id: 2, 
      logo: 'assets/imgs/logo.png', 
      username: 'Coding Technyks', 
      location: 'India', 
      src: 'assets/imgs/posts/7.png',
      description: 'Music App Auth Screens. Watch at https://www.youtube.com/watch?v=AH0Eaubds7w&t=89s&ab_channel=CodingTechnyks',
      likes: 80,
      image: true
    },
    {
      id: 3, 
      logo: 'assets/imgs/logo.png', 
      username: 'Coding Technyks', 
      location: 'India', 
      src: 'assets/videos/2.mp4',
      description: "Ionic 5+ Bottom Sheet 2021 #instagramapp #CodingTechnyks #Technyks #Ionic UI #Angular #shorts ► Hello Friends, Welcome to @CodingTechnyks, I brought to you Ionic 5+ Bottom Sheet UI Design using​ #Ionic5 #Angular for #android & #ios. Full Episode at Ionic 5+ Bottom Sheet 2021 - Implementing Modal with Dynamic list | Instagram Clone App | Part III",
      likes: 4
    },
    {
      id: 4, 
      logo: 'assets/imgs/logo.png', 
      username: 'Coding Technyks', 
      location: 'India', 
      src: 'assets/videos/3.mp4',
      description: 'Its Nature Again! A Brand New "PLANT APP - Part II" published by #codingtechnyks using​ #Ionic5 - #Angular #Typescript #ionic for #android & #ios, can also be used for #pwa',
      likes: 56
    },
    {
      id: 5, 
      logo: 'assets/imgs/logo.png', 
      username: 'Coding Technyks', 
      location: 'India', 
      src: 'assets/imgs/posts/4.png',
      description: 'Food Delivery App Auth Screens. Watch at https://www.youtube.com/watch?v=Td46HaHVR0g&list=PLixvNT19uDK6Fk6glTj18ONQRpCAVnY0G&ab_channel=CodingTechnyks',
      likes: 150,
      image: true
    },
    {
      id: 6, 
      logo: 'assets/imgs/logo.png', 
      username: 'Coding Technyks', 
      location: 'India', 
      src: 'assets/imgs/posts/10.png',
      description: 'Plant App part II. Watch at https://www.youtube.com/watch?v=ZNRr8lg-kDU&t=1136s&ab_channel=CodingTechnyks',
      likes: 200,
      image: true
    },
    {
      id: 7, 
      logo: 'assets/imgs/logo.png', 
      username: 'Coding Technyks', 
      location: 'India', 
      src: 'assets/imgs/posts/6.png',
      description: 'E-Commerce App Auth Screens. Watch at https://www.youtube.com/watch?v=vdRYkwImbYQ&t=315s&ab_channel=CodingTechnyks',
      likes: 100,
      image: true
    }
  ];
  nowPlaying = null;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {    
    this.didScroll();
  }

  toggleWrap(feed) {
    feed.wrap = !feed.wrap;
  }

  isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  didScroll(event?) {
    console.log(event);
    if(this.nowPlaying && this.isElementInViewport(this.nowPlaying)) return;
    else if(this.nowPlaying && !this.isElementInViewport(this.nowPlaying)) {
      this.nowPlaying.pause();
      this.nowPlaying = null;
    }

    this.videos.forEach(player => {
      console.log('player', player);

      if(this.nowPlaying) return;

      const nativeElement = player.nativeElement;
      const inView = this.isElementInViewport(nativeElement);

      if(inView) {
        this.nowPlaying = nativeElement;
        this.nowPlaying.muted = true;
        this.nowPlaying.play();
      }
    });
  }

}

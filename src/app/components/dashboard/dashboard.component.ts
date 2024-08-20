import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notes : object[] = [
    {
      id: 1,
      title: 'Grocery List',
      description: 'Buy milk, eggs, bread, and coffee.'
    },
    {
      id: 2,
      title: 'Meeting Notes',
      description: 'Discuss project milestones and deadlines with the team.'
    },
    {
      id: 3,
      title: 'Book Recommendations',
      description: 'Read "Atomic Habits" by James Clear and "Sapiens" by Yuval Noah Harari.'
    },
    {
      id: 4,
      title: 'Workout Plan',
      description: 'Monday: Cardio, Wednesday: Strength training, Friday: Yoga.'
    },
    {
      id: 5,
      title: 'Travel Itinerary',
      description: 'Visit Tokyo Tower, Shibuya Crossing, and Meiji Shrine.'
    },
    {
      id: 6,
      title: 'Movie List',
      description: 'Watch "The Shawshank Redemption," "The Godfather," and "The Dark Knight."'
    },
    {
      id: 7,
      title: 'Recipe Ideas',
      description: 'Try making homemade pizza, pasta carbonara, and chocolate lava cake.'
    },
    {
      id: 8,
      title: 'Gift Suggestions',
      description: 'Buy a watch, perfume, and flowers for your loved ones.'
    }
  ];
  

}

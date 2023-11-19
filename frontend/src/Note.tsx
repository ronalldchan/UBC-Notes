export class Note {
  year: number;
  courseName: string;
  courseNumber: number;
  section: number;
  date: number;
  imageUrl: string;

  constructor(year: number, courseName: string, courseNumber: number, section: number, date: number, imageUrl: string) {
    this.year = year;
    this.courseName = courseName;
    this.courseNumber = courseNumber;
    this.section = section;
    this.date = date;
    this.imageUrl = imageUrl;
  }
}

function sortbydateAdded(notes: Note[]) {
  const sortednotes = [...notes];

  sortednotes.sort((a, b) => a.date - b.date);
  return sortednotes;
}

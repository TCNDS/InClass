import { Component, OnInit } from '@angular/core';
import { JobBoardServerService, JobItem } from './job-board-server.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-job-borad',
  standalone: false,
  templateUrl: './job-borad.component.html',
  styleUrl: './job-borad.component.scss'
})
export class JobBoradComponent implements OnInit{
  jobIds: number[] = [];
  jobs: JobItem[] = [];
  pageSize = 6;
  currentIndex = 0;
  loading = false;

  constructor(private jobService: JobBoardServerService) {}
  ngOnInit(): void {
    this.fetchJobIds();
  }

  fetchJobIds(): void{
    this.jobService.getJobIds().subscribe(ids => {
      this.jobIds = ids;
      this.loadMoreJobs();
    });
  }
  loadMoreJobs(): void {
    if (this.loading) return;

    const nextIds = this.jobIds.slice(this.currentIndex, this.currentIndex + this.pageSize);
    if (nextIds.length === 0) return;

    this.loading = true;

    const requests = nextIds.map(id => this.jobService.getJobById(id));

    forkJoin(requests).subscribe(jobs => {
      this.jobs = [...this.jobs, ...jobs];
      this.currentIndex += this.pageSize;
      this.loading = false;
    });
  }

  hasMoreJobs(): boolean {
    return this.currentIndex < this.jobIds.length;
  }

  formatTime(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleString();
  }

}

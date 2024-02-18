import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
})
export class RepoListComponent implements OnChanges {
  _repoData: any = [];
  @Input() set repoData(value: any) {
    this._repoData = value;
  }

  @Input() dataLoaded = false;
  filteredData = [];
  page = 1;
  pageSize = 10;

  ngOnChanges(changes: SimpleChanges) {
    this.filteredData = this._repoData;
  }
  searchRepos(event: any) {
    const key = event.target.value;

    this.filteredData = this._repoData.filter((item: any) =>
      item.name.toLowerCase().includes(key?.toLowerCase())
    );
  }
}

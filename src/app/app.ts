import {
  AfterViewInit,
  Component,
  ElementRef,
  signal,
} from '@angular/core';
import { PROJECTS, PROFILE_LINKS, SKILL_GROUPS, STATS, STUDENT } from './data/portfolio.data';
import { Project } from './models/project';

type Filter = 'Todos' | Project['category'];

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected readonly student = STUDENT;
  protected readonly links = PROFILE_LINKS;
  protected readonly skillGroups = SKILL_GROUPS;
  protected readonly stats = STATS;
  protected readonly projects = PROJECTS;
  protected readonly filters: Filter[] = ['Todos', 'Angular', 'Flutter', 'Arquitectura'];
  protected readonly activeFilter = signal<Filter>('Todos');
  protected readonly menuOpen = signal(false);
  protected readonly activeSection = signal('inicio');
  protected readonly currentYear = new Date().getFullYear();

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  protected get filteredProjects(): Project[] {
    const filter = this.activeFilter();
    return filter === 'Todos' ? this.projects : this.projects.filter((p) => p.category === filter);
  }

  protected setFilter(filter: Filter): void {
    this.activeFilter.set(filter);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  ngAfterViewInit(): void {
    const revealItems = this.host.nativeElement.querySelectorAll<HTMLElement>('[data-reveal]');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12 },
      );

      revealItems.forEach((item) => observer.observe(item));

      const sections = this.host.nativeElement.querySelectorAll<HTMLElement>('section[id]');
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeSection.set(entry.target.id);
            }
          }
        },
        { rootMargin: '-35% 0px -55% 0px' },
      );

      sections.forEach((section) => sectionObserver.observe(section));
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    }
  }
}

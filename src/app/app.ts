import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CopyRights } from "./Components/copy-rights/copy-rights";
import { Footer } from "./Components/footer/footer";
import { Navbar } from "./Components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar , Footer, CopyRights, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FrameworkApp1');
}

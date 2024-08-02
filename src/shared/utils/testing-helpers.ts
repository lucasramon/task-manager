import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBedStatic } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

export function findComponent<T>(
  fixture: ComponentFixture<T>,
  selector: string,
): DebugElement {
  return fixture.debugElement.query(By.css(selector));
}




export function createComponent<T>(TestBed: TestBedStatic, component: any) {
  const fixture = TestBed.createComponent(component);
  const componentInstance = fixture.componentInstance;
  fixture.detectChanges();
  return componentInstance;
}

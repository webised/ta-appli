import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
describe('Intitulé du test', () => {

  it('Calcul compliqué!', () => {
    // Arrange
    let a = 4;

    // Act
    let result = a * 2;

    // Assert
    expect(result).toBe(8);
  });
});
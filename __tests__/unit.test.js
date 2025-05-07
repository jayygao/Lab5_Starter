// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone', () => {
  expect(isPhoneNumber('666-222-4444')).toBe(true);
  expect(isPhoneNumber('(666)222-4444')).toBe(true);
});

test('invalid phone', () => {
  expect(isPhoneNumber('666222444')).toBe(false);
  expect(isPhoneNumber('ski-332-toil')).toBe(false);
});

test('valid emails', () => {
  expect(isEmail('joe@ucsd.com')).toBe(true);
  expect(isEmail('joe@gmail.com')).toBe(true);
});

test('invalid emails', () => {
  expect(isEmail('invalid')).toBe(false);
  expect(isEmail('invalid.com')).toBe(false);
});

test('valid strong', () => {
  expect(isStrongPassword('J0929')).toBe(true);
  expect(isStrongPassword('bye_p12')).toBe(true);
});

test('invalid strong', () => {
  expect(isStrongPassword('123a')).toBe(false); 
  expect(isStrongPassword('joe!@')).toBe(false); 
});

test('valid dates', () => {
  expect(isDate('5/7/2025')).toBe(true);
  expect(isDate('09/29/2022')).toBe(true);
});

test('invalid dates', () => {
  expect(isDate('20252/7/203')).toBe(false); 
  expect(isDate('5-7-2025')).toBe(false); 
});

test('valid hex colors', () => {
  expect(isHexColor('#312')).toBe(true);
  expect(isHexColor('000000')).toBe(true);
});

test('invalid hex colors', () => {
  expect(isHexColor('#9999')).toBe(false);
  expect(isHexColor('joe982231')).toBe(false);
});
/**
 * @license
 * Copyright 2025-2026 NomiFun (nomifun.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, test } from 'bun:test';

const thaiRoot = fileURLToPath(new URL('./locales/th-TH/', import.meta.url));
const englishRoot = fileURLToPath(new URL('./locales/en-US/', import.meta.url));

describe('Thai locale support', () => {
  test('ships a complete Thai bundle with the same namespace files as English', () => {
    expect(existsSync(thaiRoot)).toBe(true);
    if (!existsSync(thaiRoot)) return;

    const englishFiles = readdirSync(englishRoot).filter((file) => file.endsWith('.json')).sort();
    const thaiFiles = readdirSync(thaiRoot).filter((file) => file.endsWith('.json')).sort();
    expect(thaiFiles).toEqual(englishFiles);
    expect(existsSync(`${thaiRoot}index.ts`)).toBe(true);
  });

  test('uses Thai copy for the language selector and core actions', () => {
    const titlebarSource = readFileSync(
      new URL('../../components/layout/Titlebar/TitlebarLanguageMenu.tsx', import.meta.url),
      'utf8'
    );
    const switcherSource = readFileSync(
      new URL('../../components/settings/LanguageSwitcher.tsx', import.meta.url),
      'utf8'
    );

    expect(titlebarSource.includes("'th-TH': 'ไทย'")).toBe(true);
    expect(titlebarSource.includes("current === 'th-TH'")).toBe(true);
    expect(switcherSource.includes("'th-TH': 'ไทย'")).toBe(true);
    expect(switcherSource.includes("value='th-TH'")).toBe(true);
  });

  test('contains translated core labels instead of an English-only clone', () => {
    if (!existsSync(`${thaiRoot}common.json`)) {
      expect(existsSync(`${thaiRoot}common.json`)).toBe(true);
      return;
    }

    const common = JSON.parse(readFileSync(`${thaiRoot}common.json`, 'utf8')) as Record<string, unknown>;
    const settings = JSON.parse(readFileSync(`${thaiRoot}settings.json`, 'utf8')) as Record<string, unknown>;
    expect(common.save).toBe('บันทึก');
    expect(common.cancel).toBe('ยกเลิก');
    expect(settings.language).toBe('ภาษา');
  });
});

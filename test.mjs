import { describe, it } from 'mocha';
import assert from 'assert';
import axios from 'axios';
import cheerio from 'cheerio';


describe('checking HTTP codes of pages', function () {
  it('HTPP code 200 for Main page', async function () {
    const response = await axios.get('http://127.0.0.1:8090/');
    assert.strictEqual(response.status, 200);
  });


  it('HTPP code 200 for MH370 page', async function () {
    const response = await axios.get('http://127.0.0.1:8090/MH370');
    assert.strictEqual(response.status, 200);
  });

  it('HTPP code 200 for KLM page', async function () {
    const response = await axios.get('http://127.0.0.1:8090/KLM');
    assert.strictEqual(response.status, 200);
  });

  it('HTPP code 200 for TW2UA page', async function () {
    const response = await axios.get('http://127.0.0.1:8090/TW2UA');
    assert.strictEqual(response.status, 200);
  });

  it('HTPP code 200 for Contact page', async function () {
    const response = await axios.get('http://127.0.0.1:8090/Contact');
    assert.strictEqual(response.status, 200);
  });
});

describe('Form Test', function () {
  it('Check if form exists', async function () {
      const url = 'http://127.0.0.1:8090/';

      const response = await axios.get(url);

      const $ = cheerio.load(response.data);

      const formCount = $('form').length;

      assert.strictEqual(formCount > 0, true, 'No form found on the page');
  });
});

describe('Navbar Test', function () {
  it('navbar on main page', async function () {
      const url = 'http://127.0.0.1:8090/';

      const response = await axios.get(url);

      const $ = cheerio.load(response.data);

      const navbarCount = $('.navbar').length;

      assert.strictEqual(navbarCount > 0, true, 'No navbar found on the page');
  });
});


describe('Background Image Test', function () {
  it('background image on main page', async function () {
      const url = 'http://127.0.0.1:8090/';
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      let backgroundImageFound = false;
      $('[style]').each(function () {
          const style = $(this).attr('style');
          if (style && style.includes('background-image')) {
              backgroundImageFound = true;
          }
      });
      assert.strictEqual(backgroundImageFound, true, 'No elements with background images found on the page');
  });
});

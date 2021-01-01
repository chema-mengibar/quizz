import Es from './es';

describe('ES dictionary', () => {
  it('should contain a "title"', () => {
    expect(Es).toHaveProperty('title') 
  });
});
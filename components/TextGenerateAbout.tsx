'use client';

import { TextGenerateEffect } from './ui/text-generate-effect';

const words = `Major Butta is a dynamic duo that includes Oakland California’s masked rapper AP MAJOR and sultry songstress soul singer SOLBUTTA. They are known for their thought provoking body moving bangers with lyrics that challenge power paradigms.”
`;

export function TextGenerateAbout() {
  return <TextGenerateEffect words={words} />;
}

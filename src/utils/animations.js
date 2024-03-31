// utils/useAnimatedHeading.js
import '../styles/base/_animations.scss';

export function useAnimatedText(text) {
    let words = [];

    const splitText = text.split(' ');
    words = splitText;

    return words.map((word, index) => (
        <span
            key={index}
            className="fadeIn"
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            {word + '\u00A0'}
        </span>
    ));
};
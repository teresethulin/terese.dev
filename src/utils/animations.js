import '../styles/base/_animations.scss';

export function useAnimatedText(text) {
    let words = [];

    const splitText = text.split(' ');
    words = splitText;

    return words.map((word, index) => (
        <span
            key={index}
            className="fadeInFromBelow"
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            {word + ' '}
        </span>
    ));
};
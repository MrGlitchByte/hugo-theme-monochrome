const colors = require('tailwindcss/colors');

const gray = {
    50: '#fafafa',
    100: '#f5f5f5',
    150: '#ededed',
    200: '#e5e5e5', //text color
    250: '#dddddd', //hamburger color
    300: '#d4d4d4',
    350: '#bcbcbc',
    400: '#a3a3a3', //hover highlight
    450: '#8b8b8b', //date color
    500: '#afaf00',
    550: '#636363', //underline
    600: '#525252', //highlights
    650: '#494949', //code block bg
    700: '#404040',
    750: '#333333', //site bg
    800: '#262626',
    850: '#1f1f1f',
    900: '#171717',
};

const marginAndPadding = {
    'auto': 'auto',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
};

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            padding: {
                0.75: '0.2rem',
            },
            margin: {
                '-7': '-1.75rem',
                '-5': '-1.25rem',
            },
            width: {
                120: '30rem',
            },
            minHeight: {
                10: '2.5rem',
            },
        },
        fill: {
            'gray': gray,
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'base': '1rem',
            'md': '1.125rem',
            'lg': '1.25rem',
            'xl': '1.35rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: gray,
            blue: {
                300: colors.blue[300],
                600: colors.blue[600],
            },
            overlay: 'rgba(0,0,0,0.75)',
        },
        gridTemplateColumns: {
            'svg-group': 'repeat(auto-fill, 1rem)',
            'bookcase-item': 'repeat(auto-fill, 8rem)',
            'statistic': 'max-content 1fr',
        },
        margin: marginAndPadding,
        padding: marginAndPadding,
        gap: theme => ({
            1.5: '0.375rem',
            2: theme('spacing.2'),
            4: theme('spacing.4'),
        }),
        inset: theme => ({
            'full': '100%',
            '0': theme('spacing.0'),
            '24': theme('spacing.24'),
        })
    },
    variants: {
        extend: {
            margin: ['dark'],
            borderWidth: ['hover'],
            display: ['dark'],
        },
        zIndex: [],
        borderColor: ['hover', 'dark'],
        backgroundColor: ['hover', 'dark'],
        fill: ['hover', 'dark'],
        textColor: ['hover', 'dark'],
    },
    corePlugins: {
        fontVariantNumeric: false,
        letterSpacing: false,
        userSelect: false,
        verticalAlign: false,
        visibility: false,
        wordBreak: false,
        gridAutoColumns: false,
        gridColumn: false,
        gridColumnStart: false,
        gridColumnEnd: false,
        gridAutoRows: false,
        gridTemplateRows: false,
        gridRow: false,
        gridRowStart: false,
        gridRowEnd: false,
        transform: false,
        transformOrigin: false,
        scale: false,
        rotate: false,
        translate: false,
        skew: false,
        transitionProperty: false,
        transitionDuration: false,
        animation: false,
        transitionDelay: false,
        textDecoration: false,
        textTransform: false,
        textOpacity: false,
        stroke: false,
        ringOpacity: false,
        ringWidth: false,
        ringColor: false,
        ringOffsetWidth: false,
        ringOffsetColor: false,
        resize: false,
        pointerEvents: false,
        placeholderOpacity: false,
        opacity: false,
        objectPosition: false,
        maxWidth: false,
        borderOpacity: false,
        backgroundOpacity: false,
        gradientColorStops: false,
        divideOpacity: false,
        divideStyle: false,
        divideColor: false,
        divideWidth: false,
        divideOpacity: false,
        space: false,
        placeholderColor: false,
        placeholderOpacity: false,
        order: false,
        float: false,
        clear: false,
        accessibility: false,
        container: false,
    }
}

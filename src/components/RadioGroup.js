import config from 'veui/managers/config';

config.defaults(
    {
        ui: {
            size: {
                values: ['s', 'm', 'l'],
                inherit: true,
                default: 'm'
            }
        }
    },
    'radiogroup'
);

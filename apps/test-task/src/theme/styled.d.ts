import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            pink: string;
            darkPink: string;
            social: {
                facebook: string;
                twitter: string;
                vk: string;
                ok: string;
            };
        };
    }
}

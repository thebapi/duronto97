/**
 * Created by IntelliJ IDEA.
 * User: Sajib Sarkar
 * Email: thebapi@gmail.com
 * Date: 2019-04-05
 * Time: 00:17
 */

import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, orange } from '@material-ui/core/colors';

export const theme = createMuiTheme({
    typography: {
        // Tell Material-UI what's the font-size on the html element is.
        // htmlFontSize: 8,
        useNextVariants: true,
    },
    palette1: {
        primary: {
            light: '#acc5ff',
            main: '#7795f8',
            dark: '#3f68c5',
            contrastText: '#c4f0ff',
        },
        secondary: {
            light: '#ffb5d6',
            main: '#f483a5',
            dark: '#bf5376',
            contrastText: '#fff',
        },
    },
    palette2: {
        primary: {
            light: '#243B53',
            main: '#334E68',
            dark: '#243B53',
            contrastText: '#fff',
        },
        secondary: {
            light: '#D9E2EC',
            main: '#BCCCDC',
            dark: '#9FB3C8',
            contrastText: '#000',
        },
    },
    palette: {
        primary: deepPurple,
        secondary: orange,
    },
    spacing: {
        unit: 8,
    },
    overrides: {
        // Name of the component ⚛️ / style sheet
        Button: {
            // Name of the rule
            text: {
                // Some CSS
                backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 3,
                border: 0,
                color: 'white',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            },
        },
    },
});

// --blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}
/*


.has-pale-pink-background-color.has-pale-pink-background-color {
  background-color: #f78da7
}

.has-vivid-red-background-color.has-vivid-red-background-color {
  background-color: #cf2e2e
}

.has-luminous-vivid-orange-background-color.has-luminous-vivid-orange-background-color {
  background-color: #ff6900
}

.has-luminous-vivid-amber-background-color.has-luminous-vivid-amber-background-color {
  background-color: #fcb900
}

.has-light-green-cyan-background-color.has-light-green-cyan-background-color {
  background-color: #7bdcb5
}

.has-vivid-green-cyan-background-color.has-vivid-green-cyan-background-color {
  background-color: #00d084
}

.has-pale-cyan-blue-background-color.has-pale-cyan-blue-background-color {
  background-color: #8ed1fc
}

.has-vivid-cyan-blue-background-color.has-vivid-cyan-blue-background-color {
  background-color: #0693e3
}

.has-very-light-gray-background-color.has-very-light-gray-background-color {
  background-color: #eee
}

.has-cyan-bluish-gray-background-color.has-cyan-bluish-gray-background-color {
  background-color: #abb8c3
}

.has-very-dark-gray-background-color.has-very-dark-gray-background-color {
  background-color: #313131
}

.has-pale-pink-color.has-pale-pink-color {
  color: #f78da7
}

.has-vivid-red-color.has-vivid-red-color {
  color: #cf2e2e
}

.has-luminous-vivid-orange-color.has-luminous-vivid-orange-color {
  color: #ff6900
}

.has-luminous-vivid-amber-color.has-luminous-vivid-amber-color {
  color: #fcb900
}

.has-light-green-cyan-color.has-light-green-cyan-color {
  color: #7bdcb5
}

.has-vivid-green-cyan-color.has-vivid-green-cyan-color {
  color: #00d084
}

.has-pale-cyan-blue-color.has-pale-cyan-blue-color {
  color: #8ed1fc
}

.has-vivid-cyan-blue-color.has-vivid-cyan-blue-color {
  color: #0693e3
}

.has-very-light-gray-color.has-very-light-gray-color {
  color: #eee
}

.has-cyan-bluish-gray-color.has-cyan-bluish-gray-color {
  color: #abb8c3
}

.has-very-dark-gray-color.has-very-dark-gray-color {
  color: #313131
}
*/

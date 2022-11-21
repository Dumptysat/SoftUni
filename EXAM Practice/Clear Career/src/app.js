import page from '../node_modules/page/page.mjs';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderContentMiddleware } from './middlewares/renderContentMiddleware.js';
import { session } from './middlewares/sessionMiddleware.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsVIew.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';

page(session);
page(navigationMiddleware);
page(renderContentMiddleware);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView);
page('/create', createView);
page('/edit/:id', editView);
page('/details/:id', detailsView);
page('/logout', logoutView);
page.start();

import page from '../node_modules/page/page.mjs';
import { contentMiddleware } from './middlewares/contentMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { sessionMiddleware } from './middlewares/sessionMiddleware.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { loginView } from './views/loginView.js';
import { onLogout } from './views/logoutView.js';
import { myPostsView } from './views/myPostsView.js';
import { registerView } from './views/registerView.js';

page(sessionMiddleware);
page(navigationMiddleware);
page(contentMiddleware);
page('/login', loginView);
page('/register', registerView);
page('/logout', onLogout);
page('/catalog', catalogView);
page('/', catalogView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/myposts', myPostsView);
page.start();

import { configureStore } from '@reduxjs/toolkit'
import listButton from './slices/numberButton.index.js';
import numberPage from './slices/numberPage.index.js';
import page from './slices/page.index.js';
import userName from './slices/userName.index.js';

export default configureStore({
  reducer: {
    name: userName,
    page: page,
    numberPage:numberPage,
    button: listButton
	}
});

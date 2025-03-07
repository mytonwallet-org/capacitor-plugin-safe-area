import { WebPlugin } from '@capacitor/core';
export class SafeAreaWeb extends WebPlugin {
    async getSafeAreaInsets() {
        return {
            insets: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }
        };
    }
    async getStatusBarHeight() {
        // throw this.unimplemented('Method not supported on Web.');
        return {
            statusBarHeight: 0
        };
    }
    setImmersiveNavigationBar() {
        throw this.unimplemented('Method not supported on Web.');
    }
}
//# sourceMappingURL=web.js.map
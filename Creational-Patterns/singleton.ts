/**
 * Singleton class defines getInstance method, which allows client to acces the unique singleton instance
 */
 class Singleton {

    private static instance: Singleton;
    /**
     * Making contstructor private so that direct calls to constructor can be avoided, using 'new'
     */
    private constructor() {}

    /**
     * This static method controls the access to Singleton instance
     */
    public static getInstance(): Singleton {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    /**
     * Any Singleton will have some business logic which can be executed on its instance
     */

    public businessLogic() {
        //
    }
}

/**
 * Client Code
 */

function clietCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if ( s1=== s2) {
        console.log('There is only one instance');
    } else {
        console.log('There are two different Singleton instance');
    }
}
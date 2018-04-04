if (Package['accounts-ui']
    && !Package['service-configuration']
    && !Package.hasOwnProperty('djabatav:communecter-config-ui')) {
    console.warn(
        "Note: You're using accounts-ui and accounts-communecter,\n" +
        "but didn't install the configuration UI for the communecter\n" +
        "OAuth. You can install it with:\n" +
        "\n" +
        "    meteor add djabatav:communecter-config-ui" +
        "\n"
    );
}
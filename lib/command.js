class Command {
}

class Parser {
    serialize(cmd) {
        return undefined;
    }

    deserialize(str) {
        return undefined;
    }
}

class ToggleParser extends Parser {
    serialize(cmd) {
        return "toggle " + cmd.target;
    }

    deserialize(str) {
        return new Toggle(str.split(" ")[1]);
    }
}


class Toggle extends Command {
    constructor(target) {
        this.target = target;
    }

    serialize() {
        return "toggle " + this.target;
    }

}
function test() {
    setTimeout(function () { this.disabled = true;}.bind(this), 1000)
}
test()
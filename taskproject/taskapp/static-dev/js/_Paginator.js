class Paginator {
    constructor() {
        this.name = "";
        this.nextPage = 0;
        this.currentPage = 0;
        this.prevPage = 0;
        this.init();
    }

    init() {
        this.pagination = $(document.createElement("div"));
        this.pagination.addClass("taskControls pagination");

        this.prevBtn = $(document.createElement("a"));
        this.prevBtn.attr("type", "button");
        this.prevBtn.addClass("btn taskControl pageControl js-goto");
        this.prevBtn.append('<i class="fas fa-chevron-left"></i>');
        this.pagination.append(this.prevBtn);

        this.current = $(document.createElement("span"));
        this.current.attr("type", "button");
        this.current.addClass("btn taskControl");
        this.current.text(this.currentPage);
        this.pagination.append(this.current);

        this.nextBtn = $(document.createElement("a"));
        this.nextBtn.attr("type", "button");
        this.nextBtn.addClass("btn taskControl pageControl js-goto");
        this.nextBtn.append('<i class="fas fa-chevron-right"></i>');
        this.pagination.append(this.nextBtn);

        this.prevBtn.on("click", e => {
            e.preventDefault();
            Task.getPage(this.prevPage);
        });

        this.nextBtn.on("click", e => {
            e.preventDefault();
            Task.getPage(this.nextPage);
        });
    }

    setData(data) {
        this.currentPage = data.page;
        this.nextPage = data.next;
        this.prevPage = data.prev;
        this.current.text(this.currentPage);
        this.draw();
    }
    draw() {
        if (this.prevPage) {
            this.prevBtn.attr("state", "visible");
        }
        else {
            this.prevBtn.attr("state", "hidden");
        }

        if (this.nextPage) {
            this.nextBtn.attr("state", "visible");
        }
        else {
            this.nextBtn.attr("state", "hidden");
        }
    }
}
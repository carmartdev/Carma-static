// VARIABLES

main.create.main(
  "",
  [
    widgets.create.nav(),
    widgets.create.section(
      "<h1>First section</h1>",
      [widgets.create.p("the first section")]
    ),
    widgets.create.section(
      "<h1>second section</h1>",
      [widgets.create.p("the second section")]
    ),
    widgets.create.p("Hello world! this is a test"),
    widgets.create.p("Hello world! this is a cool test"),
  ],
  "child"
);

from multiprocessing import context
from os import listdir
from typing import List
from functools import reduce


def get_files() -> List[str]:
    """Returns a list of of files from `src/pages/blog`

    Returns:
        List[str]: Files
    """
    directory = "src/pages/blog"
    return list(map(lambda file: f"{directory}/{file}", listdir(directory)))


def get_tags() -> List[str]:
    """Rerurns a list of tags from posts `src/pages/blog`

    Returns:
        List[str]: list of tags
    """
    tags = set()
    for filename in get_files():
        with open(filename, "r", encoding="utf-8") as f:
            for line in f.readlines():
                if line.startswith("tags"):
                    remove_list = " ,\",',[,],tags:".split(",")
                    line = reduce(
                        lambda old, char: old.replace(char, ""),
                        remove_list,
                        line.strip(),
                    )
                    tags.update(set(line.split(",")))
                    break
    return list(tags)


def write_in_file() -> None:
    """
    Write tags on the route file `src/pages/posts/topics/[topic].astro`
    """
    path = "src/pages/posts/topics/[topic].astro"
    get_static_paths_function = (
        "---\n"
        + "export function getStaticPaths() {\n"
        + "\treturn [\n"
        + "\t\t"
        + ",\n\t\t".join(
            [f"{{params: {{topic: \"{tag.lower()}\"}}}}" for tag in sorted(get_tags())]
        )
        + ",\n"
        + "\t\t// Don't add any new topic here, use <scripts/topics-dynamic-routes.py>"
        + "\n\t\t\t// and it will add all topics\n"
        + "\t\t];\n"
        + "}"
    )
    with open(path, "r") as f:
        context = f.read()
    with open(path, "w") as f:
        f.write(
            get_static_paths_function.replace("\t", "    ")
            + context[context.find("}\n") + 1 :]
        )


def main() -> None:
    write_in_file()


if __name__ == "__main__":
    main()

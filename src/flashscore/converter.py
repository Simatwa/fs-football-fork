import json


def inspect(func: callable) -> callable:
    def decorator(data_str):
        resp = func(data_str)
        print(resp)
        return resp

    return decorator


def try_to_load_json(data: str) -> dict | list | str:
    try:
        return json.loads(data)
    except json.JSONDecodeError:
        return data


# @inspect
def gzip_to_json(gzip: str) -> list[dict]:
    items = gzip.split("~")

    json_result = []
    for item in items:
        if item in ["", " "]:
            continue
        item_params = item.split("¬")
        item_data = {}

        for param in item_params:
            if param in ["", " "]:
                continue

            try:
                key, value = param.split("÷")
            except Exception:
                key, value = param.split("·")

            if item_data.get(key) is None:
                item_data[key] = try_to_load_json(value)
            else:
                item_data[f"{key}_2"] = try_to_load_json(value)

        json_result.append(item_data)
    return json_result

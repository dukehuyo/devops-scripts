import os
import yaml
import argparse
from datetime import datetime

def load_config(config_file):
    with open(config_file, 'r') as stream:
        try:
            config = yaml.safe_load(stream)
            return config
        except yaml.YAMLError as exc:
            print(exc)
            return None

def get_current_date():
    return datetime.now().strftime('%Y-%m-%d')

def main():
    parser = argparse.ArgumentParser(description='DevOps Scripts')
    parser.add_argument('--config', help='Config file path', required=True)
    args = parser.parse_args()

    config = load_config(args.config)
    if config is None:
        return 1

    print(f'Running on {get_current_date()}')
    print('Configuration loaded successfully')

if __name__ == '__main__':
    main()
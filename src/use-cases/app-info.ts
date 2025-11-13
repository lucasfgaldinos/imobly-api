import packageJson from '../../package.json' with { type: 'json' };

export class AppInfoUseCase {
  execute() {
    const { name, version, author } = packageJson;

    return { name, version, author };
  }
}

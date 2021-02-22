---
id: permissionOverrides
title: Permission Overrides
sidebar_label: Permission Overrides
slug: /guides/permission-overrides
---

Permission overrides are a useful feature in RoManager, that allow you to allow/deny the ability to use a command, regardless of group permissions.

## Creating a permission override
To create a permission override, you use the `permission-override` command.

Use the `permission-override add` sub-command, and the prompts will guide you.

![Following the permission-override add sub-command prompts](https://i.jaydenn.dev/2021/02/n3xMRjmAjWp.png)

:::tip
Don't want to ping the role you're changing an override for? Just use the role's name.
:::

## Viewing permission overrides

Use the `permission-override view` sub-command, and RoManager will display all permission overrides.

![Output of the permission-override view sub-command](https://i.jaydenn.dev/2021/02/3dQZbuMS529.png)

## Removing permission overrides

Use the `permission-override remove` sub-command and follow the prompts.

![Following the permission-override remove sub-command prompts](https://i.jaydenn.dev/2021/02/d2lSpoTMivH.png)
